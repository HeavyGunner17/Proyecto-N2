
function confirmLogout() {
    Swal.fire({
        title: 'Are you sure you want to log out??',
        icon: 'info',
        showDenyButton: true,
        confirmButtonText: 'Yes, i want to leave',
        confirmButtonColor: '#269cb5',
        denyButtonText: `Stay`,
        denyButtonColor: '#44b91f',
    }).then(async (result) => {
        if (result.isConfirmed) {
            await Swal.fire({ text: 'You have successfully logged out!', icon: 'success', confirmButtonColor: '#269cb5'})
            logout()
        } else if (result.isDenied) {
            Swal.fire({ text: 'You chose to stay signed in', icon: 'info', })
        }
    })
}