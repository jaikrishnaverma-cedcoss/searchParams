
// custom hook to get index of object with the help of match of key value of object
const useIndexKey = () => {
  const getIndex=(arr,key,val)=>{
      let index=-1
      let user={}
      arr&&arr.forEach((item, i) => {
        if ( item[key] == val) {
          user={...item}
          index=i
        }
      });
    return {index,user}
}
return getIndex
}
export default useIndexKey