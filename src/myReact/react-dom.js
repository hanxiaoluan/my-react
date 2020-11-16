function render(vnode, container){
	console.log('vnode', vnode)

	const node = createNode(vnode)

	container.appendChild(node)
}

function createNode(vnode){
	const { type, props } = vnode

	let node

	if(type === 'TEXT'){
		node = document.createTextNode('')
	}else if(typeof type === 'string'){
		node = document.createElement(type)
	}else if(typeof type === 'function'){
		node = updateFunctionComponent(vnode)
	}

	// 遍历children
	reconcileChildren(node, props.children)

	updateNode(node, props)
	return node
}

// nextVal 数据类型 object

function updateNode(node, nextVal){
	Object.keys(nextVal)
		.filter(k => k !== 'children')
		.forEach(k => {
			node[k] = nextVal[k]
		})
}

// 函数式组件处理

function updateFunctionComponent(vnode){
	const { type, props } = vnode
	const vvnode = type(props)
	const node = createNode(vvnode)
	return node
}

function reconcileChildren(node, children){
	for(let i = 0;i < children.length;i++){
		const child = children[i]
		render(child, node)
	}
}

export default { render }