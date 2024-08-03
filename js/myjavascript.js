// dom selection 
const selector = document.getElementById('filter-selection')
let cardbox = document.getElementById('cardboxid')
let heading = document.getElementById('heading')

// datatypes
const productinfo = [
    {},
    {
        name: 'Payals',
        folderName: 'payals',
        imagesLength: 13
    },
    {
        name: 'Men Rings',
        folderName: 'rings',
        imagesLength: 9
    },
    {
        name: 'Jhumka',
        folderName: 'jhumka',
        imagesLength: 20
    }
]

// functions
const handleLoad = (e) => {
    if (Number(e.target.value) == 0) {
        let data = ''
        productinfo.map((element)=>{
            heading.innerHTML = "All"
            for (i = 1; i <= element.imagesLength; i++) {
                data += `<div class="card"> <img src="images/${element.folderName}/p${i}.jpg"></div>`
            }
        })
        cardbox.innerHTML = data
    }
    else {
        const listno = Number(e.target.value)
        heading.innerHTML = String(productinfo[listno].name)
        let data = ''
        for (i = 1; i <= productinfo[listno].imagesLength; i++) {
            data += `<div class="card"> <img src="images/${productinfo[listno].folderName}/p${i}.jpg"></div>`
        }
        cardbox.innerHTML = data
    }
}

// event listener
selector.addEventListener('change', handleLoad)