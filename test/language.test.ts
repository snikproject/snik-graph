import * as language from "../js/lang/language";
import { assert } from "chai";

describe("language", () => {
	describe("#getStrings()", () => {
		for (const lang of ["en", "de"]) {
			test("should contain the language " + lang, () => {
				assert(language.setLanguage(lang), "Language not found.");
				assert.isAbove(Object.keys(language.getIdStrings()).length, 27);
				assert.isOk(language.getString("file"), "Key 'file' not found.");
			});
		}
	});
});
