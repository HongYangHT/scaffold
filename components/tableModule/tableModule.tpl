<div class="m-oparate" data-oparate="{{id}}">
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r u-delete" v-on:click="operateDelete($event)">删除</a>
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r" v-on:click="operateEdit($event)">编辑</a>
</div>
<table cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff" v-set-style="style" v-set-parent-style="style" data-id="{{id}}">
	<tr v-for="n in row">
		<td v-for="i in col">
			<div data-id="{{id+(n+1)*(i+1)}}" style="position:relative;width:100%;height:100%;" v-on:mouseenter="addClassActive($event)" v-on:mouseleave="removeClassActive($event)" v-if="links[i].value">
				<a href="{{links[i].value}}" target="_blank" style="display: block;width:100%;text-align:center;vertical-align:top;text-decoration:none;"><img v-bind:src="imgRoots[i].value" alt="{{remarks[i].value}}"></a>
			</div>
			<div data-id="{{id+(n+1)*(i+1)}}" style="position:relative;width:100%;height:100%;" v-on:mouseenter="addClassActive($event)" v-on:mouseleave="removeClassActive($event)" v-else>
				<img v-bind:src="imgRoots[i].value" alt="{{remarks[i].value}}">
			</div>
		</td>
	</tr>
</table>