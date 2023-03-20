function toggleDiv(e) {
    if (e.target.id=='work') {
        e.target.className = 'selected'
        document.getElementById('proj').className = 'unselected'
        document.getElementById('work-timeline').className = ''
        document.getElementById('proj-timeline').className = 'hidden'
    }
    else{
        e.target.className = 'selected'
        document.getElementById('work').className = 'unselected'
        document.getElementById('proj-timeline').className = ''
        document.getElementById('work-timeline').className = 'hidden'
    }
}
// document.getElementById('work')