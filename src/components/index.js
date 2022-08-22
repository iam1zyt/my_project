import myButton from './myButton'
import myTable from './myTable'
import myModal from './myModal'
import ButtonList from './ButtonList'

export default{
    install(Vue){
        Vue.component('myButton', myButton);
        Vue.component('myTable', myTable);
        Vue.component('myModal', myModal);
        Vue.component('ButtonList', ButtonList);
        
        
    }
}