<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h1 align="center">Create New User</h1>
				<form action="#" @submit.prevent="create">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" name="name" id="name" v-model="user.name" class="form-control" required>
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<input type="email" name="email" id="email" v-model="user.email" class="form-control" required>
					</div>
					<div class="form-group">
						<button class="btn btn-success">Save</button>
					</div>
				</form>
				<div class="row">
					<div class="col-md-12" style="text-align: right">
						<router-link to="/users" class="btn btn-primary">Cancel</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {}
			}
		},

		methods: {
			create() {
				// send request to server here
				// axios.post('http://server/api/users', this.users).then(response => {
				// 	// handle response
				// });

				this.fakeCreate();
			},

			fakeCreate() {
				this.$Progress.start();

				setTimeout(() => {
					this.$Progress.finish();
					this.user.id = Object.keys(this.$store.state.users).length + 1;

					this.$store.state.users.push(this.user);

					router.push('/users/' + this.user.id);
				}, 1000);
			}
		}
	}
</script>