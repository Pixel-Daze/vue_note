<!-- @desc:移动端筛选组件 -->
<template>
	<div class="filter-bar">
		<ul class="filter-bar-nav pixel-1px-b">
			<li v-for="(item,index) in titleList"  @click="changeTab(index)">
				<span :class="{'pixel-1px-r':index<titleList.length-1}">{{item.name}}</span>
			</li>
		</ul>
		<div class="filter-data-wrap">
			<div class="first">
				<div v-for="item in curList">
					<span>{{item.name}}</span>
				</div>
			</div>
		</div>
		<div id="cover" class="filter-bar-cover" :style="{top:top+'px'}"></div>
	</div>
</template>
<script>
	/**
	 * filter-bar
	 * @desc 条件筛选条
	 * @param {String} [top] - 阴影距离顶部距离
	 * @param {Array} [filterData] - 渲染数据
	 * @param {Number} [minNum] - 最小值
	 * @param {Boolean} [borderd] - 是否显示边框
	 *
	 * @example
	 */
	export default {
		name:'filter-bar',
		data(){
			return {
				titleList:[],
				filterList:[],
				curList:[]
			}
		},
		props:{
			top:{
				type:String,
				default:'0'
			},
			filterData:{
				type:Array,
				required:true,
				default:[]
			}
		},
		methods:{
			initData(){
				let vm = this
				vm.filterData.forEach((item,index)=>{
					vm.titleList.push({name:item.name})
					/* 存入组件内部进行操作 */
					vm.filterList.push(item)
				})
			},
			/* @desc:切换curList */
			changeTab(index){
				let vm = this
				vm.curList = vm.filterList[index].children
				console.log(vm.curList)
			}
		},
		mounted(){
			let vm = this
			this.$nextTick(function () {
				vm.initData()
			})
		}
	}
</script>
<style lang='scss'>
	@import './filterBar.scss';
</style>