
export const questionOptionsService = {
  splitPutAdnCreate
}

function splitPutAdnCreate (options) {
  let toCreate = []
  let toPut = []
  options.forEach(option => {
    if (typeof option.id !== 'undefined') {
      toPut.push(option)
    } else {
      toCreate.push(option)
    }
  })
  return {
    toPut,
    toCreate
  }
}

export default questionOptionsService
