/**
 * Renovate config that's "global" and "shouldn't be editable by contributors."
 *
 * @see https://docs.renovatebot.com/self-hosted-configuration/
 */
module.exports = {
  // Allow some post-upgrade commands
  allowedPostUpgradeCommands: [
    '^npm run bump:patch$',
    '^npm ci --ignore-scripts$',
    '^npm run lint:fix$',
  ],
};
