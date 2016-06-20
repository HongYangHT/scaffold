<div class="m-oparate" data-oparate="{{id}}">
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r u-delete" v-on:click="operateDelete($event)">删除</a>
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r" v-on:click="operateEdit($event)">编辑</a>
</div>
<table cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff" v-set-style="style" data-id="{{id}}">
	<tr v-for="n in row">
		<td v-for="i in col">
			<div data-id="{{id+(n+1)*(i+1)}}" v-on:click="showModal($event)" v-on:mouseenter="addClassActive($event)" v-on:mouseleave="removeClassActive($event)" style="position:relative;width:100%;height:100%;">
				
			</div>
		</td>
	</tr>
</table>