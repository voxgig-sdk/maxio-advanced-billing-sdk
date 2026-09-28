<?php
declare(strict_types=1);

// MaxioAdvancedBilling SDK base feature

class MaxioAdvancedBillingBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MaxioAdvancedBillingContext $ctx, array $options): void {}
    public function PostConstruct(MaxioAdvancedBillingContext $ctx): void {}
    public function PostConstructEntity(MaxioAdvancedBillingContext $ctx): void {}
    public function SetData(MaxioAdvancedBillingContext $ctx): void {}
    public function GetData(MaxioAdvancedBillingContext $ctx): void {}
    public function GetMatch(MaxioAdvancedBillingContext $ctx): void {}
    public function SetMatch(MaxioAdvancedBillingContext $ctx): void {}
    public function PrePoint(MaxioAdvancedBillingContext $ctx): void {}
    public function PreSpec(MaxioAdvancedBillingContext $ctx): void {}
    public function PreRequest(MaxioAdvancedBillingContext $ctx): void {}
    public function PreResponse(MaxioAdvancedBillingContext $ctx): void {}
    public function PreResult(MaxioAdvancedBillingContext $ctx): void {}
    public function PreDone(MaxioAdvancedBillingContext $ctx): void {}
    public function PreUnexpected(MaxioAdvancedBillingContext $ctx): void {}
}
