<script>

    let email = '';
    let username = '';
    let password = '';
    let errors = [];

    function handleSubmit() {
        // Handle form submission here
        console.log('Email:', email);
        console.log('Password:', password);

        // email and password are required
        if (!email) {
            errors.push('Email is required');
        }

        if (!password) {
            errors.push('Password is required');
        }

        if (errors.length > 0) {
            errors.forEach((error) => {
                console.error(error);
            });
        } else {
            console.log('No errors');
        }
    }
</script>

<main class="flex items-center justify-center">
    <div class="w-full max-w-md">
        <h1 class="text-3xl font-bold text-center my-5">Sign Up</h1>
        <p>
            Create an account or sign in to continue.
        </p>
        {errors.length} Errors are
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" on:submit|preventDefault={handleSubmit}>
            <!-- Display errors here -->
            {#if errors.length > 0}
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Errors:</strong>
                <ul>
                    {#each errors as error}
                        <li>{error}</li>
                    {/each}
                </ul>
            </div>
            {/if}
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" bind:value={email}>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" bind:value={username}>
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" bind:value={password}>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
    </div>
</main>