<div class="g-hd" id="mainHeader">
    <div class="m-btn-group">
    	<div class="m-group">
            <div class="u-btn u-edit" v-bind:class="{'active' : editActive}" v-on:click="handleClick($event,0)">
                <label for="edit">
        			{{edit}}
        		</label>
    			<input type="radio" v-model="picked" id="edit" name="picked" value="0" style="display: none;"/>
            </div>
            <div class="u-btn u-prev" v-bind:class="{'active' : prevActive}" v-on:click="handleClick($event,1)">
                <label for="preview">
        			{{prev}}
        		</label>
    			<input type="radio" v-model="picked" id="preview" name="picked" value="1" style="display: none;"/>
            </div>
            <div class="u-btn u-download" v-bind:class="{'active' : downloadActive}" v-on:click="downloadHtml">
                <label for="download">
                    {{download}}
                </label>
                <input type="radio" v-model="picked" id="download" name="picked" value="2" style="display: none;"/>
            </div>
    	</div>
    </div>
</div>