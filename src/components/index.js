import myButton from './myButton'
import myTable from './myTable'

export default{
    install(Vue){
        Vue.component('myButton', myButton);
        Vue.component('myTable', myTable);
        
        
    }
}