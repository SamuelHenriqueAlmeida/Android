import { ImagePropTypes } from "react-native"

//Somente java script
export default props => {
    if(props.teste){
        return props.children
    }
    else{
        return false
    }
}