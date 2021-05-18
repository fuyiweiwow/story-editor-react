import TreeNode from '../model/treeNode'
import React from 'react';

class TextTree extends React.Component {

    constructor(props){
        super(props);

        this.subMap = [];
        this.subMap.push(new TreeNode("child11","我是子节点1的子节点哦",null))
        this.child = new TreeNode("child1","我是一个子节点哦",this.subMap);

        this.child2 = new TreeNode("child2","我是子节点2哦",null);
        this.child3 = new TreeNode("child3","我是子节点3哦",null);
        this.childMap = [];
        this.childMap.push(this.child);
        this.childMap.push(this.child2);
        this.childMap.push(this.child3);
        this.parent = new TreeNode("parentA","我是一个父节点哦",this.childMap)
    }
    render() {
        let arrayIns = [];
        arrayIns.push( this.parent);
        return (
            this.buildTree(arrayIns)
        );
  }

    buildTree = (nodes)=> {
        let ins = Array.from(nodes);
        return ins.map(node => {
           if (!node.children) {
                return (
                    <li id={node.name}>
                        {node.infomation}
                    </li>
                );
           } else {
                return (
                    <ul id={node.name}>
                        {node.infomation}
                        {
                            this.buildTree(node.children)
                        }
                    </ul>);
           }
        });
    };

}

export default TextTree 