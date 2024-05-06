import { PureComponent } from "react";


class Comp extends PureComponent{
 render(){
    console.log('Comp updated');
    return <h1>CHILD COMPONENT</h1>
 }
}

export default Comp;