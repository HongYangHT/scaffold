<div class="m-oparate" data-oparate="{{id}}">
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r u-delete" v-on:click="operateDelete($event)">删除</a>
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r" v-on:click="operateEdit($event)">编辑</a>
</div>
<a href="{{link}}" target="_blank" v-if="link" style="display:block;width:100%;text-align:center;text-decoration:none;outline-style:none;"><img v-bind:src="imgRoot" target="_blank" v-bind:alt="remark" v-set-style="style" v-set-parent-style="style"/></a>
<img v-bind:src="imgRoot" target="_blank" v-bind:alt="remark" v-set-style="style" v-set-parent-style="style" v-else/>