let _this;

let ecc_config = {
    address_prefix: process.env.npm_config__graphene_ecc_default_address_prefix || "GXC"
};

_this = {
    core_asset: "GXC",
    address_prefix: "GXC",
    expire_in_secs: 15,
    expire_in_secs_proposal: 24 * 60 * 60,
    review_in_secs_committee: 24 * 60 * 60,
    networks: {
        GXC: {
            core_asset: "GXC",
            address_prefix: "GXC",
            chain_id: "6b8260bc4e9ee8cebf7d37e336ef9f3c471897f4221b3191d30c6d59e9dac5a7"
        }
    },

    /** Set a few properties for known chain IDs. */
    setChainId: function(chain_id) {

        let i, len, network, network_name, ref;
        ref = Object.keys(_this.networks);

        for (i = 0, len = ref.length; i < len; i++) {

            network_name = ref[i];
            network = _this.networks[network_name];

            if (network.chain_id === chain_id) {

                _this.network_name = network_name;

                if (network.address_prefix) {
                    _this.address_prefix = network.address_prefix;
                    ecc_config.address_prefix = network.address_prefix;
                }

                // console.log("INFO    Configured for", network_name, ":", network.core_asset, "\n");

                return {
                    network_name: network_name,
                    network: network
                }
            }
        }

        if (!_this.network_name) {
            console.log("Unknown chain id (this may be a testnet)", chain_id);
        }

    },

    reset: function() {
        _this.core_asset = "GXC";
        _this.address_prefix = "GXC";
        ecc_config.address_prefix = "GXC";
        _this.expire_in_secs = 15;
        _this.expire_in_secs_proposal = 24 * 60 * 60;

        console.log("Chain config reset");
    },

    setPrefix: function(prefix = "GXC") {
        _this.address_prefix = prefix;
        ecc_config.address_prefix = prefix;
    }
}

export default _this;
