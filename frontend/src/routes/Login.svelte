<script>
    let email = '';
    let password = '';

    function handleSubmit() {
        // Handle form submission here
        console.log('Email:', email);
        console.log('Password:', password);
    }
</script>

<main class="flex items-center justify-center">
    <div class="w-full max-w-md">
        <h1 class="text-3xl font-bold text-center my-5">Sign In</h1>
        <p>
            Create an account or sign in to continue.
        </p>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" on:submit|preventDefault={handleSubmit}>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" bind:value={email}>
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