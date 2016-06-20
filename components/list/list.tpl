<div class="m-modal" v-show="showModal">
   	<div class="m-modal-bg"></div>
   	<div class="m-modal-content">
   		<div class="u-modal-content">
			<a href="javascript:;" target="_self" class="u-close" v-on:click="hideModal($event)"></a>
   			<div class="m-nav" id="collapse">
				<section class="s-page-mail">自适应邮件布局</section>
				<div class="m-sect-1">
					<div class="u-view" v-for="item in emails" data-type="{{item.type}}" data-row="{{item.row}}" data-col="{{item.col}}">
						<label>{{item.name}}</label>
						<input type="text" value="{{item.value}}" class="u-input-s" disabled="disabled"/>
						<a href="javascript:;" target="_self" class="u-btn-s" v-on:click="addComponent($event)">增加</a>
					</div>
				</div>
				<section class="s-module">自适应邮件模块</section>
				<div class="m-sect-2">
					<div class="u-view" v-for="item in modules" data-type="{{item.type}}">
						<label>{{item.name}}</label>
						<input type="text" value="{{item.value}}" class="u-input-s" disabled="disabled"/>
						<a href="javascript:;" target="_self" class="u-btn-s" v-on:click="addComponent($event)">增加</a>
					</div>
				</div>
				<section class="s-page">自适应邮件组件</section>
				<div class="m-sect-3">
					<div class="u-view" v-for="item in components" data-type="{{item.type}}">
						<label>{{item.name}}</label>
						<input type="text" value="{{item.value}}" class="u-input-s" disabled="disabled"/>
						<a href="javascript:;" target="_self" class="u-btn-s" v-on:click="addComponent($event)">增加</a>
					</div>
				</div>
				<section class="s-page">活动页面布局</section>
				<div class="m-sect-3">
					<div class="u-div u-div-1">
						comming soon ...
					</div>
				</div>
			</div>
   		</div>
   	</div>
</div>