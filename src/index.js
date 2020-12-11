/* eslint-disable react/react-in-jsx-scope */

// eslint-disable-next-line no-unused-vars
import React from './myReact'
import ReactDOM from './myReact/react-dom'
import './index.css'

// eslint-disable-next-line no-unused-vars
function FunctionComponent(props) {
	// eslint-disable-next-line react/react-in-jsx-scope
	return <div className="border">FunctionComponent-{props.name}</div>
}
  
const jsx = (
	<div className="border">
		<h1>慢 慢 慢</h1>
		<p>开课吧</p>
		<a href="https://www.kaikeba.com/">开课吧</a>
		<FunctionComponent name="函数组件" />
	</div>
)

// 经过babel-loader编译，jsx就是React.createElement(...)函数执行
ReactDOM.render(jsx, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line no-undef

