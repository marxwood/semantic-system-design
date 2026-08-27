# Experiment State

`experiment.yaml` is the current coordination state for `ssd-agent-transfer-001`.

Runtimes must treat repository notifications as wake-up signals and re-read this state before claiming work.

State changes should be accompanied by evidence under `../events/` when they represent a meaningful runtime, work, evaluation, drift, safe-stop, or experiment-stage transition.
