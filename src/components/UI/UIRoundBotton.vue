<template>
    <div class="container">
        <button class="round-button">Reset</button>
    </div>
    
</template>
    
<script>
    
</script>
    
<style scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 15%;
    position: relative;
    padding-top: 15%;
    max-height: 100%;
    }

.round-button {
    position: absolute;
    border-radius: 50%;
    max-height: 100%;
    inset: 0;
    overflow: hidden;
    border: 1px solid var(--color-two);
    cursor: pointer;
}

label {
    padding: 15px;
    position: absolute;
    left: 50%;
    bottom: -50%;
    transform: translate(-50%);
}
    
</style>