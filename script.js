const doc = document;

const tab1 = doc.getElementById('tab1body')
const tab2 = doc.getElementById('tab2body')

function toggleTabs() {
    const temp = tab1.style.display;
    tab1.style.display = tab2.style.display;
    tab2.style.display = temp;
}