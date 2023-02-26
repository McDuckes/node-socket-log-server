function initializeTranslation(Alpine: any, currentLanguage: string = 'en') {
    Alpine.store('lang', {
        current: currentLanguage,
        en: {
            page_logging: 'Logging',
            page_metrics: 'Metrics',
            page_trigger_messages: 'Trigger Messages',
            page_triggers: 'Triggers',
            update_speed: 'Update Speed:',
            seconds: ' seconds',
            minutes: ' minutes',
            hours: ' hours',
            all_time: 'All time',
            auto_update_active: 'Auto Update active',
            auto_update_deactivated: 'Auto Update deactivated',
            auth_credentials_incorrect: 'Login failed',
            auth_pending: 'Login pending',
            auth_successful: 'Logged in',
            timeframe_type: 'Timeframe-Type:',
            timeframe_type_timeframe: 'Messages within timeframe',
            timeframe_type_since: 'Messages since',
            search_term: 'Search Term:',
            search: 'Search',
            filter_by_channel: 'Filter by Channel:',
            filter_by_server: 'Filter by Server:',
            time: 'Time:',
            channel: 'Channel:',
            message: 'Message:',
            level: 'Level:',
            server: 'Server:',
            data: 'Data:',
            password: 'Password:',
            close: 'Close',
            authenticate: 'Login',
            metrics_cpu: 'CPU Load',
            metrics_mem_used: 'Memory Used %',
            metrics_disk_used: 'Disk Used %',
            metrics_io_write: 'Write IO Operations',
            metrics_io_read: 'Read IO Operations',
            metrics_net_in: 'Traffic In MB',
            metrics_net_out: 'Traffic Out MB',
            metrics_error_rate: 'Error Rate',
            metrics_logs: 'Incoming Log Messages',
            triggers_id: 'ID',
            triggers_add: 'Add',
            triggers_add_title: 'Add Trigger',
            triggers_edit: 'Edit',
            triggers_edit_title: 'Edit Trigger',
            triggers_delete: 'Delete',
            triggers_active: 'Active',
            triggers_name: 'Name',
            triggers_description: 'Description',
            triggers_type: 'Type',
            triggers_value: 'Value',
            triggers_threshold: 'Threshold',
            triggers_time: 'Timeframe (Seconds)',
            triggers_delete_question: 'Are you sure you want to delete the trigger with the ID %s ?',
            triggers_type_gt: 'Greater',
            triggers_type_gteq: 'Greater or equal',
            triggers_type_eq: 'Equal',
            triggers_type_lteq: 'Lower or equal',
            triggers_type_lt: 'Lower',
        },
    });

    return (index: string) => {
        return Alpine.store('lang')[Alpine.store('lang').current][index] ?? index;
    }
}