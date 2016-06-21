<div class="m-oparate" data-oparate="{{id}}">
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r u-delete" v-on:click="operateDelete($event)">删除</a>
	<a href="javascript:;" target="_self" class="u-btn-s f-fl-r" v-on:click="operateEdit($event)">编辑</a>
</div>
<a href="{{btnLink}}" target="_blank" v-set-style="style" v-set-parent-style="style">
	<span style="display:block;margin:10px 0;font-weight:normal;">
		<i style="font-style:normal;font-size:20px;color:#333;font-family:Microsoft YaHei,Simsun;">{{title}}</i>
	</span>
	<span style="margin:0;display:block;font-weight:normal;font-size:14px;color:#888;line-height:20px;font-family:Microsoft YaHei,Simsun;">
		{{desc}}
	</span>
	<span style="margin:10px 0;display:block;font-weight:normal;font-size:16px;color:#ab2b2b;line-height:24px;font-family:Microsoft YaHei,Simsun;">{{tip}}</span>
	<span style="display:block;width:138px;height:36px;border-radius:4px;font-size:14px;line-height:36px;color:#fff;background:#ab2b2b;text-align:center;font-family:Microsoft YaHei,Simsun;">{{btnText}}</span>
</a>