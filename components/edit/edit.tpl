<div class="m-edit" v-show="showFlag">
	<div class="m-group" v-for="item in editProperties">
		<div class="u-group" v-if="item.type">
			<label>{{item.name}}：</label>
			<div class="u-input-group">
				<input type="text" class="u-input" v-model="item.value" lazy/>
			</div>
		</div>
		<div class="u-group" v-if="item.select">
			<label>{{item.name}}：</label>
			<div class="u-input-group">
				<!-- <input type="text" class="u-input" v-model="item.value" lazy/> -->
				<select class="u-input" v-model="item.value" lazy>
					<option v-for="option in item.values" value="{{option.value}}">
						<span>{{option.name}}</span>
					</option>
				</select>
			</div>
		</div>
		<div class="u-group" v-if="item.textArea">
			<label>{{item.name}}：</label>
			<div class="u-input-group">
				<textarea v-model="item.value" class="u-textarea">{{item.value}}</textarea>
			</div>
		</div>
	</div>
	<div class="m-group-linkImg" v-for="item in imgRoots">
		<div class="m-group">
			<div class="u-group" v-if="item.type">
				<label>{{item.name}}：</label>
				<div class="u-input-group">
					<input type="text" class="u-input" v-model="item.value" lazy/>
				</div>
			</div>
		</div>

		<div class="m-group">
			<div class="u-group" v-if="links[$index].type">
				<label>{{links[$index].name}}：</label>
				<div class="u-input-group">
					<input type="text" class="u-input" v-model="links[$index].value" lazy/>
				</div>
			</div>
		</div>

		<div class="m-group">
			<div class="u-group" v-if="remarks[$index].type">
				<label>{{remarks[$index].name}}：</label>
				<div class="u-input-group">
					<input type="text" class="u-input" v-model="remarks[$index].value" lazy/>
				</div>
			</div>
		</div>
	</div>
	<div class="m-group-linkImg" v-for="item in headerLogoImg">
		<div class="m-group">
			<div class="u-group" v-if="item.type">
				<label>{{item.name}}：</label>
				<div class="u-input-group">
					<input type="text" class="u-input" v-model="item.value" lazy/>
				</div>
			</div>
		</div>

		<div class="m-group">
			<div class="u-group" v-if="headerLogoLink[$index].type">
				<label>{{headerLogoLink[$index].name}}：</label>
				<div class="u-input-group">
					<input type="text" class="u-input" v-model="headerLogoLink[$index].value" lazy/>
				</div>
			</div>
		</div>

		<div class="m-group">
			<div class="u-group" v-if="headerLogoRemark[$index].type">
				<label>{{headerLogoRemark[$index].name}}：</label>
				<div class="u-input-group">
					<input type="text" class="u-input" v-model="headerLogoRemark[$index].value" lazy/>
				</div>
			</div>
		</div>
	</div>
	<div class="m-group" v-for="item in edit">
		<div class="u-group" v-if="item.type">
			<label>{{item.name}}：</label>
			<div class="u-input-group">
				<input type="text" class="u-input" v-model="item.value" lazy/>
			</div>
		</div>
		<div class="u-group" v-if="item.select">
			<label>{{item.name}}：</label>
			<div class="u-input-group">
				<!-- <input type="text" class="u-input" v-model="item.value" lazy/> -->
				<select class="u-input" v-model="item.value" lazy>
					<option v-for="option in item.values" value="{{option.value}}">
						<span>{{option.name}}</span>
					</option>
				</select>
			</div>
		</div>
		<div class="u-group" v-if="item.textArea">
			<label>{{item.name}}：</label>
			<div class="u-input-group">
				<textarea v-model="item.value">{{item.value}}</textarea>
			</div>
		</div>
	</div>
</div>