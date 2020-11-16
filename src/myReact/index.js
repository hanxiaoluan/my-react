
function createElement(type, config, ...children){

	// 删除无用的属性
	if(config){

		//删除文件路径属性
		delete config._source
		delete config._self
	}

	// 先不考虑key和ref

	const props = {
		...config,

		//源码中会区分props.children的类型，如数组，单个对象
		// 但现在只考虑数组，因为diff的核心逻辑都在数组里 
		children: children.map(child =>  typeof child === 'object' ? child : createTextNode(child))
	}
    
	return {
		type,
		props
	}
}

function createTextNode(text){
	return {
		type: 'TEXT',
		props: {
			children: [],
			nodeValue: text
		}
	}
}

export default {
	createElement
}