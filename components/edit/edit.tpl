<div class="m-edit">
	<div class="m-group" v-for="index in properties">
		<div class="u-group" v-if="index.type">
			<label>{{index.name}}：</label>
			<div class="u-input-group">
				<input type="text" class="u-input" v-model="index.value" lazy/>
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
	</div>
</div>