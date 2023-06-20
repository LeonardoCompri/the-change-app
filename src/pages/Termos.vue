<template>
    <v-container class="box">
        <v-row class="mt-6 px-5">
            <v-col cols="12" class="mb-5">
                <p class="text-entrar">1. Capitulo</p>
                <p class="subTitle">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </v-col>

            <v-col cols="12" class="mb-5">
                <p class="text-entrar">2. Capitulo</p>
                <p class="subTitle">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </v-col>

            <v-col cols="12" class="mb-5">
                <p class="text-entrar">3. Capitulo</p>
                <p class="subTitle">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </v-col>

            <v-col cols="12" class="mb-5">
                <p class="text-entrar">4. Capitulo</p>
                <p class="subTitle">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
</script>



<style scoped>
.box {
    min-height: calc(100vh + 100px);
    background: #060518;
    background-image: url("../assets/backgroundAccount.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
}


.text-entrar{
    font-family: 'Azeret Mono';
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0px;
    color: #fff;
}

.subTitle {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0px;
    color: #fff;
}
</style>