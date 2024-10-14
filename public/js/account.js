console.log("OK")
const deleteAccountForm = document.querySelector("#deleteAccountForm")
const deletAccountBtn = document.querySelector("#deleteAccountBtn")
if(deletAccountBtn){
    deletAccountBtn.addEventListener('click',()=>{
        const id = deletAccountBtn.getAttribute('item-id')
        deleteAccountForm.action = deleteAccountForm.getAttribute('raw-path')+`/${id}?_method=PATCH`
        deleteAccountForm.submit()
    })
}