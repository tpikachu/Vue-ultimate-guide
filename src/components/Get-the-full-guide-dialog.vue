<template>
<!-- Dialog -->
<md-dialog :md-active.sync="isActiveDialog" class="md-dialog__get-the-full-guide">
    <header class="md-dialog__header">
        <img :src="require('../assets/images/chefhero_ultimate_guide.png')" alt="ChefHero Ultimate Guide" class="md-dialog__image">
        <h2 class="md-dialog__title">Unlock your restaurant growth! Get access to the final chapter.</h2>
    </header>
    <div class="md-dialog__body">
        <form
            class="unlock-chapter-form"
            onsubmit="onSubmitUnlockChapterForm(this)" 
            :data-route="$route.name"
            method="POST" 
            action="https://chefhero.activehosted.com/proc.php">
            <input type="hidden" name="u" value="21">
            <input type="hidden" name="f" value="21">
            <input type="hidden" name="s">
            <input type="hidden" name="c" value="0">
            <input type="hidden" name="m" value="0">
            <input type="hidden" name="act" value="sub">
            <input type="hidden" name="v" value="2">

            <md-field>
                <label for="name">Your Name</label>
                <md-input name="name" id="name" required />
            </md-field>

            <md-field>
                <label for="email">Your Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" required />
            </md-field>
			<div>
				<input type="hidden" name="field[155]"  v-model="utm_medium"/>
				<input type="hidden" name="field[156]"  v-model="utm_source"/>
				<input type="hidden" name="field[157]"  v-model="utm_campaign"/>
				<input type="hidden" name="field[158]"  v-model="utm_content"/>
				<input type="hidden" name="field[159]"  v-model="utm_category"/>
			</div>	
            <div class="submit-checkbox">
                    <md-input type="checkbox" name="checkbox" id="checkbox" autocomplete="" />
                    <label for="checkbox">By submitting my email addresss, I agree to receive electronic communications from ChefHero.</label>
            </div> 

            <md-button 
            class="md-accent md-raised md-button_size_middle"
            type="submit">Unlock chapter</md-button>
        </form>
        <div v-if="!isLargeScreen">
            <md-button class="md-icon-button md-raised md-dialog__close-button" @click="toggleDialog()">
                <md-icon>clear</md-icon>
            </md-button>
        </div>
    </div>
</md-dialog>
<!-- /Dialog -->
</template>

<script>
export default {
    data: () => {
        const cookieID = "__utmzz=";
        let utmParams = []

        if (window.document.cookie) {
            const c = window.document.cookie
                .split('; ')
                .find(cookie => cookie.includes(cookieID))

            utmParams = c.slice(cookieID.length)
                .split('|')
                .map(p => p.split('='));
        }

        return {
            isActiveDialog: false,
            isLargeScreen: true,
            utmParamMap: new Map(utmParams),
            utm_medium: "",
            utm_source: "",
            utm_campaign: "",
            utm_content: "",
            utm_category: "",
        }
    },
    created() {
		window.toggleDialog = this.toggleDialog;
        this._isLargeScreen();
    },
    methods: {
		getUTMvalue(name){
			console.log(this.utmParamMap.get(name));
            return this.utmParamMap.get(name) || '';
		},
		setUTMvalue() {
			this.utm_medium = this.getUTMvalue('utmcmd');
			this.utm_source = this.getUTMvalue("utmcsr");
			this.utm_campaign = this.getUTMvalue("utmccn");
			this.utm_content = this.getUTMvalue("utmcct");
			this.utm_category = this.getUTMvalue("utmctr"); // keywords labeled as category
		},
        toggleDialog() {
			this.setUTMvalue();
            this.isActiveDialog = !this.isActiveDialog;
        },
        _isLargeScreen() {
            this.isLargeScreen = window.outerWidth > 992;
        }
    }
}
</script>
