<div class="m-oparate" data-oparate="{{id}}">
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r u-delete" v-on:click="operateDelete($event)">删除</a>
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r" v-on:click="operateEdit($event)">编辑</a>
</div>
<table cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff" v-set-style="style" v-set-parent-style="style" data-id="{{id}}">
	<tr v-for="n in row">
		<td v-for="i in col">
			<div data-id="{{id+(n+1)*(i+1)}}" style="position:relative;width:100%;height:100%;" v-on:mouseenter="addClassActive($event)" v-on:mouseleave="removeClassActive($event)" v-set-child-style="style">
				<span v-for="ix in logo" style="display:inline-block;">
					<a href="{{headerLogoLink[ix].value}}" target="_blank" style="display: block;width:100%;padding:10px 0 10px 10px;text-align:center;vertical-align:top;text-decoration:none;" v-if="headerLogoLink[ix].value" >
						<img v-bind:src="headerLogoImg[ix].value" alt="{{headerLogoRemark[ix].value}}" style="margin-right:12px;vertical-align:top;border:0;">
					</a>
					<img v-bind:src="headerLogoImg[ix].value" alt="{{headerLogoRemark[ix].value}}" style="margin-right:12px;vertical-align:top;border:0;padding:10px 0 10px 10px;" v-else>
				</span>
			</div>
		</td>
	</tr>
</table>