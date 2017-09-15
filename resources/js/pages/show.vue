<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h1 align="center">View Profile</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h1 align="center">{{ user.name }}</h1>
				<h1 align="center">{{ user.email }}</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12" style="text-align: right">
				<router-link to="/users" class="btn btn-primary">Go Home</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.fetchUser();
		},

		data() {
			return {
				user: {}
			}
		},

		methods: {
			fetchUser() {
				let user = this.$root.$data.users.filter((value, index) => { console.log(value);
					return value.id == this.$route.params.id;
				});

				if (Object.keys(user).length == 0) {
					router.replace('/404');
				}

				this.user = user[0];
			}
		}
	}
</script>