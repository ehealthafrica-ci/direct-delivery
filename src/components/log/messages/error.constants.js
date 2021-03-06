'use strict';

angular.module('log')
		.constant('ERROR_MESSAGES', {
			stateChangeError: {
				title: 'Application error',
				message: 'Could not load page',
				remedy: 'Please try that again'
			},
			saveFailed: {
				title: 'Save failed',
				message: 'Could not save that item',
				remedy: 'Please ensure the form is valid and try again'
			},
			authInvalid: {
				title: 'Authentication',
				message: 'Invalid username or password',
				remedy: 'Please try again'
			},
			networkError: {
				title: 'Network',
				message: 'Network error',
				remedy: 'Please check your internet connection and try again'
			},
			dailyScheduleRetrival: {
				title: 'Daily schedule',
				message: 'Could not retrieve your daily schedule',
				remedy: 'Please check your internet connection and try again'
			},
			loginError: {
				title: 'Login failed',
				message: 'Could not login',
				remedy: 'Please double check your network connectivity and try again'
			},
			logoutError: {
				title: 'Logout failed',
				message: 'Could not logout due to an application error',
				remedy: 'Please contact support'
			},
			invalidCancelReport: {
				title: 'Invalid cancel report',
				message: 'Reason not selected',
				remedy: 'Please, select reason for cancelling delivery'
			},
			'invalidSignature': {
				title: 'Invalid signature',
				message: 'Signature not signed',
				remedy: 'Please, sign before submitting'
			},
			'facilityRoundNotSet': {
				title: 'Invalid Facility ID',
				message: 'Facility ID is not set or invalid',
				remedy: 'Please, contact support to update to valid facility ID'
			},
			'dailyDeliveryFailed': {
				title: 'Daily delivery',
				message: 'Saving delivery report failed',
				remedy: 'Please, try again. if it continues, contact support'
			},
			'invalidDailyDelivery': {
				title: 'Daily delivery',
				message: 'Daily delivery is not correct.',
				remedy: 'Try again, if it persists, contact support.'
			},
			'requiredDocsFailed': {
				title: 'Sync Fail',
				message: 'App will attempt to sync again',
				remedy: 'Press sync button when you have network access'
			},
			'dailyDeliverySyncDown': {
				title: 'Daily delivery',
				message: 'Daily delivery sync failed',
				remedy: 'Please double check your network connectivity and try again'
			},
			'remoteReplicationDisconnected': {
				title: 'Remote disconnection',
				message: 'Connection to remote database was disconnected',
				remedy: 'Please double check your network connectivity'
			},
			'remoteReplicationErr': {
				title: 'Remote replication',
				message: 'Replication to remote database failed',
				remedy: 'Please double check your network connectivity or contact support'
			},
			'enterOtherReasons': {
				title: 'Invalid Other reason',
				message: 'Reason required for Failed or Canceled Other',
				remedy: 'Please enter reason for failed or canceled other'
			},
			'enterRecipientName': {
				title: "Enter Received by",
				message: 'Received by not entered',
				remedy: 'Please, enter recipient name.'
			},
			unauthorizedUser: {
				title: "Unauthorised User",
				message: 'You are denied accesses.',
				remedy: 'Please, if entered correct login details, if problem persist contact support.'
			},
			'facilityRoundNotFound': {
				title: "Facility Round Not Found",
				message: "Facility Round does not exist for given KPI",
				remedy: "Please, try again and contact support if it fails again."
			},
			saveKPIFail: {
				title: "Save Facility KPI Failed",
				message: "Facility KPI could not be saved",
				remedy: "Please, try again and contact support if it fails again."
			},
			scheduleRoundResolveErr: {
				title: 'Schedule Rounds error',
				message: 'Could not fetch schedule history',
				remedy: 'Please double check your network connectivity or contact support'
			},
			'dailyScheduleWithGivenIdDoesNotExists': {
				title: 'Missing daily delivery',
				message: 'Daily delivery record does not exist',
				remedy: 'Contact support for assistance'
			},
			returnedFailed: {
				title: 'Save returned stock failed',
				message: 'Please try again',
				remedy: 'If you this continues, please contact support'
			}
		});
