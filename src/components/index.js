import myButton from './myButton'
import myTable from './myTable'
import myModal from './myModal'

export default{
    install(Vue){
        Vue.component('myButton', myButton);
        Vue.component('myTable', myTable);
        Vue.component('myModal', myModal);
        
        
    }
}