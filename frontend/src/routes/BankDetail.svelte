<script>
    import { onMount } from "svelte";
    import { useLocation } from "svelte-routing";
    import httpClient from "../plugins/interceptor";

    let bank = null;
    let loading = true;
    let error = null;
    let bankId;
    const location = useLocation();

    onMount(async () => {
        // Get bank ID from URL parameters

        if ($location && $location.params && $location.params.id) {
            bankId = $location.params.id;
        }
        
        try {
            const response = await httpClient.get(`banks/${bankId}`);
            bank = response.data.bank;
            loading = false;
        } catch (err) {
            error = "Failed to load bank details";
            loading = false;
            console.error(err);
        }
    });
</script>

<div class="container mx-auto px-4 py-8">
    {#if loading}
        <div class="flex justify-center items-center h-64">
            <div class="text-lg text-gray-600">Loading bank details...</div>
        </div>
    {:else if error}
        <div class="text-center">
            <div class="text-red-600 text-lg mb-4">{error}</div>
            <a href="/banks" class="text-cyan-700 hover:text-cyan-800 underline">
                Back to Banks List
            </a>
        </div>
    {:else if bank}
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="mb-6">
                <a href="/banks" class="text-cyan-700 hover:text-cyan-800 underline mb-4 inline-block">
                    ← Back to Banks List
                </a>
                <h1 class="text-3xl font-bold text-gray-800 mb-2">{bank.name}</h1>
            </div>

            <!-- Bank Details Card -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="bg-cyan-700 text-white px-6 py-4">
                    <h2 class="text-xl font-semibold">Bank Information</h2>
                </div>
                
                <div class="p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Basic Information -->
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-3">Basic Details</h3>
                            <div class="space-y-3">
                                <div>
                                    <label class="block text-sm font-medium text-gray-600">Bank Name</label>
                                    <p class="text-gray-800">{bank.name}</p>
                                </div>
                                {#if bank.ifsc}
                                    <div>
                                        <label class="block text-sm font-medium text-gray-600">IFSC Code</label>
                                        <p class="text-gray-800 font-mono">{bank.ifsc}</p>
                                    </div>
                                {/if}
                                {#if bank.branch}
                                    <div>
                                        <label class="block text-sm font-medium text-gray-600">Branch</label>
                                        <p class="text-gray-800">{bank.branch}</p>
                                    </div>
                                {/if}
                            </div>
                        </div>

                        <!-- Contact Information -->
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-3">Contact Details</h3>
                            <div class="space-y-3">
                                {#if bank.contact}
                                    <div>
                                        <label class="block text-sm font-medium text-gray-600">Phone</label>
                                        <p class="text-gray-800">{bank.contact}</p>
                                    </div>
                                {/if}
                                {#if bank.email}
                                    <div>
                                        <label class="block text-sm font-medium text-gray-600">Email</label>
                                        <p class="text-gray-800">{bank.email}</p>
                                    </div>
                                {/if}
                            </div>
                        </div>
                    </div>

                    <!-- Address Information -->
                    <div class="mt-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">Address</h3>
                        <div class="bg-gray-50 rounded-lg p-4">
                            <p class="text-gray-800 mb-2">{bank.address}</p>
                            <p class="text-gray-600">
                                {bank.city}{#if bank.state}, {bank.state}{/if}
                                {#if bank.district} - {bank.district}{/if}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>