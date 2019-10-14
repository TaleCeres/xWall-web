// 处理sensor的功能码转换

export function transfromValue2fc(valueList, fcList) {
  let resultList = []
  if (valueList instanceof Array) {
    valueList.forEach(value => {
      let target = fcList.find(el => el.value === value)
      if (target) resultList.push(target)
    })
  }
  return resultList
}

export function transfromValue2Name(valueList, fcList) {
  let resultList = []
  if (valueList instanceof Array) {
    valueList.forEach(value => {
      let target = fcList.find(el => el.value === value)
      if (target) resultList.push(target.name)
    })
  }
  return resultList
}

export function transfromName2Value(nameList, fcList) {
  let resultList = []
  if (nameList instanceof Array) {
    nameList.forEach(item => {
      const target = fcList.find(el => el.name === item)
      if (target) resultList.push(target.value)
    })
  }
  return resultList
}
