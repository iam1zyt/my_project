import myButton from './myButton'
import myTable from './myTable'
import myModal from './myModal'
import ButtonList from './ButtonList'
import testTable from '@/components/tableTest'


export default{
    install(Vue){
        Vue.component('myButton', myButton);
        Vue.component('myTable', myTable);
        Vue.component('myModal', myModal);
        Vue.component('ButtonList', ButtonList);
        Vue.component('testTable', testTable);
        
        
    }
}