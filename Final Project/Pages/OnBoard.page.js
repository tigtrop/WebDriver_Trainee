//Page after signing in

class OnBoard { 
    
    get  notificationBell() {
        return $('.octicon.octicon-bell[data-view-component="true"]')
    }

    async clickBell () {
        await this.notificationBell.click()
    }

    get  plusButton() {
        return $('.octicon.octicon-plus')
    }

    get  userAvatar() {
        return $('.avatar.avatar-small')
    }
}

module.exports = new OnBoard();