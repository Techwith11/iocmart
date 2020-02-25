<template>
    <div class="input-group">
        <div class="input-group-prepend">
            <select>
                <option>Posts</option>
            </select>
        </div>
        <input type="text" class="form-control" placeholder="Search query">
        <div class="input-group-append">
            <button class="btn" type="button">Search</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    input{
		border: 1px solid #777;
	}
	select{
		border: 1px solid #777;
		border-radius: 10% 0 0 10%;
		padding-left: 1rem;
	}
	button{
		background: #2E90E5;
		color: #ffffff;
		font-weight: bold;
	}
</style>