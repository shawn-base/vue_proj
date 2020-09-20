<template>
    <div>
        <div> email: {{ ComEmail }} </div>
        <div> phone: {{ ComPhone }} </div>
        <div> weibo: {{ ComWeibo }} </div>
    </div>
</template>

<script>
    export default {
        name: "ContactInfo",
        props: ["ComEmail", "ComPhone", "ComWeibo"],
}
</script>