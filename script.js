const doc = document;

const tab1 = doc.getElementById('tab1body')
const tab2 = doc.getElementById('tab2body')

function displayTab1() {
    tab1.style.display = 'inline-block';
    tab2.style.display = 'none';
}

function displayTab2() {
    tab2.style.display = 'inline-block';
    tab1.style.display = 'none';
}
