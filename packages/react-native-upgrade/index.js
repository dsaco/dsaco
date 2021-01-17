import { Platform, NativeModules } from 'react-native';

export default class Upgrade {
	static async getVersion(appleID) {
		if (Platform.OS === 'android') {
			alert('ANDROID不支持此方法');
		} else {
			const { results } = await fetch(
				`https://itunes.apple.com/cn/lookup?id=${appleID}`
			).then((response) => response.json());

			return results?.[0]?.version;
		}
	}

	static async install(path) {
		if (Platform.OS === 'android') {
			NativeModules.UpgradeModule.install(path, (result) => {
				alert(result);
			});
		} else {
			alert('IOS不支持此方法');
		}
	}
}
