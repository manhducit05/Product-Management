
const btn = document.querySelector('#savePermissionBtn')
const table = document.querySelector('#savePermissionTable')
const form = document.querySelector('#permissionForm')
const inputData = document.querySelector('#data')

//change permission
btn.addEventListener('click',()=>{
  let permissionObject = []
  const rows = table.querySelectorAll('[data-name]')
  rows.forEach(row=>{
    const name = row.getAttribute('data-name')
    const inputs = row.querySelectorAll('input')
    if(name=='id'){
      inputs.forEach(input=>{
        const id = input.value
        permissionObject.push({
          id: id,
          permission: []
        })
      })
    }
    else{
      inputs.forEach((input,index)=>{
        if(input.checked){
          permissionObject[index].permission.push(name)
        }
      })
    }
  })
  console.log(permissionObject)
  const data = JSON.stringify(permissionObject)
  // console.log(data)
  inputData.value = data
  form.submit()
})

//permisson default
const recordString = document.querySelector('[data-record]').getAttribute('data-record')
const record = JSON.parse(recordString)
record.forEach((item, index)=>{
  const permissions = item.permission
  permissions.forEach(permission=>{
    const row = table.querySelector(`[data-name=${permission}]`)
    const input = row.querySelectorAll(`input`)[index]
    input.checked=true
  })
})