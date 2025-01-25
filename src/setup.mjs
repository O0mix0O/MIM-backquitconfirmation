(function () {
    console.log("Confirm Quit Mod Loaded");

    function showQuitConfirmation() {
        Swal.fire({
            icon: "warning",
            title: "Are you sure you want to quit?",
            text: "Press 'back' again to exit, or 'OK' to stay",
            customClass: {
                container: 'swal2-container swal2-center swal-infront swal2-backdrop-show',
                popup: 'swal2-modal'
            },
        });
    }

    window.addEventListener("popstate", function (event) {
        console.log("Back button detected. Preventing default navigation.");
        event.preventDefault();
        history.pushState(null, null, location.href);
        showQuitConfirmation();
    });

    window.addEventListener("beforeunload", function (event) {
        console.log("Window close attempt detected. Showing quit confirmation modal.");
        event.preventDefault();
        event.returnValue = '';
        showQuitConfirmation();
    });

    history.pushState(null, null, location.href);

    console.log("Confirm Quit Mod with aggressive back button prevention successfully initialized.");
})();
