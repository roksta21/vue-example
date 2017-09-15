<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<h1 align="center">All Users</h1>
				<div class="row">
					<div class="col-md-12" style="text-align: right">
						<router-link to="/users/create" class="btn btn-primary">Create New</router-link>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<table class="table table-striped" v-if="users_count > 0">
							<thead>
								<tr>
									<th>#</th>
									<th>Name</th>
									<th>Email</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(user, index) in users">
									<td>{{ index + 1 }}</td>
									<td>{{ user.name }}</td>
									<td>{{ user.email }}</td>
									<td>
										<router-link :to="'/users/' + user.id">show</router-link>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="alert alert-warning" v-if="users_count == 0">
							No users found
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {

		},

		data() {
			return {
				
			}
		},

		methods: {

		},

		computed: {
			users() {
				return this.$store.state.users;
			},

			users_count() {
				return Object.keys(this.users).length;
			}
		}
	}
</script>