<div class="m-oparate" data-oparate="{{id}}">
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r u-delete" v-on:click="operateDelete($event)">删除</a>
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r" v-on:click="operateEdit($event)">编辑</a>
</div>
<a href="{{href}}" target="_blank" v-if="href" v-set-style="style" data-id={{id}}>
	{{linkText}}
</a>
<span v-set-style="style" v-else>{{linkText}}</span>